import React from 'react';
import '@testing-library/jest-dom';
import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import axios from 'axios';
import Contact from './Contact';

jest.mock('axios', () => ({ post: jest.fn() }));

const fillForm = () => {
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Test Visitor' } });
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'visitor@example.com' } });
  fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'A test message' } });
};

describe('Contact', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('submits once, confirms backend success, and resets the form', async () => {
    axios.post.mockResolvedValue({ data: { success: true, message: 'Message sent successfully.' } });
    render(<Contact />);
    fillForm();

    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    expect(screen.getByRole('button', { name: /sending/i })).toBeDisabled();
    expect(axios.post).toHaveBeenCalledWith(
      'http://localhost:8080/api/contact',
      {
        name: 'Test Visitor',
        email: 'visitor@example.com',
        message: 'A test message',
        subject: 'New message from Ayush Raj portfolio',
      },
      { timeout: 30000 },
    );

    expect(await screen.findByText('Message sent. Thanks for reaching out.')).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toHaveValue('');
    expect(screen.getByLabelText('Email')).toHaveValue('');
    expect(screen.getByLabelText('Message')).toHaveValue('');
    expect(screen.getByRole('button', { name: /send message/i })).toBeEnabled();
  });

  test('preserves form content and allows retry after a backend error', async () => {
    axios.post
      .mockRejectedValueOnce({ response: { data: { message: 'Mail service unavailable.' } } })
      .mockResolvedValueOnce({ data: { success: true } });
    render(<Contact />);
    fillForm();

    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    const alert = await screen.findByRole('alert');
    expect(alert).toHaveTextContent('Mail service unavailable.');
    expect(within(alert).getByRole('link', { name: 'ayushraj12121212@gmail.com' })).toHaveAttribute(
      'href',
      'mailto:ayushraj12121212@gmail.com',
    );
    expect(screen.getByLabelText('Name')).toHaveValue('Test Visitor');
    expect(screen.getByLabelText('Email')).toHaveValue('visitor@example.com');
    expect(screen.getByLabelText('Message')).toHaveValue('A test message');
    expect(screen.getByRole('button', { name: /send message/i })).toBeEnabled();

    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByText('Message sent. Thanks for reaching out.')).toBeInTheDocument();
    expect(axios.post).toHaveBeenCalledTimes(2);
    expect(screen.getByLabelText('Name')).toHaveValue('');
  });

  test('handles a network failure and resets the loading state', async () => {
    axios.post.mockRejectedValue(new Error('Network Error'));
    render(<Contact />);
    fillForm();

    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    const alert = await screen.findByRole('alert');
    expect(alert).toHaveTextContent('The message could not be sent. Please try again.');
    expect(screen.getByRole('button', { name: /send message/i })).toBeEnabled();
    expect(screen.getByLabelText('Message')).toHaveValue('A test message');
  });

  test('handles a timeout and resets the loading state', async () => {
    axios.post.mockRejectedValue({ code: 'ECONNABORTED' });
    render(<Contact />);
    fillForm();

    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    const alert = await screen.findByRole('alert');
    expect(alert).toHaveTextContent('The request timed out. Please try again.');
    expect(screen.getByRole('button', { name: /send message/i })).toBeEnabled();
    expect(screen.getByLabelText('Message')).toHaveValue('A test message');
  });

  test('does not treat an unconfirmed 2xx response as success', async () => {
    axios.post.mockResolvedValue({ data: { success: false, message: 'Not delivered.' } });
    render(<Contact />);
    fillForm();

    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByRole('alert')).toHaveTextContent('The message could not be sent. Please try again.');
    expect(screen.getByLabelText('Message')).toHaveValue('A test message');
    expect(screen.getByRole('button', { name: /send message/i })).toBeEnabled();
  });

  test('blocks duplicate submissions while a request is pending', async () => {
    let resolveRequest;
    axios.post.mockImplementation(() => new Promise((resolve) => {
      resolveRequest = resolve;
    }));
    render(<Contact />);
    fillForm();
    const form = screen.getByRole('button', { name: /send message/i }).closest('form');

    fireEvent.submit(form);
    fireEvent.submit(form);

    expect(axios.post).toHaveBeenCalledTimes(1);

    await act(async () => {
      resolveRequest({ data: { success: true } });
    });
    await waitFor(() => expect(screen.getByRole('button', { name: /send message/i })).toBeEnabled());
  });
});
