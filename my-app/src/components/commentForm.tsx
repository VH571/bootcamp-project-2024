"use client";

import React, { useState } from 'react';
import style from './commentForm.module.css'

export default function CommentForm({ slug }: { slug: string }) {
    const [user, setUser] = useState<string>('');
    const [comment, setComment] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);
        if (!user.trim() || !comment.trim) {
            setError('You need to enter both user and comment.');
            setLoading(false);
            return;
        }
        try {
            const res = await fetch(`/api/Blogs/${slug}/comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user, comment }),
            });
            const data = await res.json();
            if (res.ok) {
                setSuccess('Comment has been submitted');
                setUser('');
                setComment('');
            } else {
                setError(data.error || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            console.error('Error submitting comment:', err);
            setError('An unexpected error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={style.form}>
            {error && <p className={style.error}>{error}</p>}
            {success && <p className={style.success}>{success}</p>}
            <div className={style.formGroup}>
                <label htmlFor="user">Name:</label>
                <input
                    className={style.inputUser}
                    type="text"
                    id="user"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    disabled={loading}
                    required
                />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="comment">Comment:</label>
                <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    disabled={loading}
                    required
                    className={style.textarea}
                ></textarea>
            </div>
            <button type="submit" disabled={loading} className={style.button}>
                {loading ? 'Submitting...' : 'Submit Comment'}
            </button>
        </form>
    );
};

