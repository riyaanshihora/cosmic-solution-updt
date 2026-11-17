import { useState } from 'react';
import { ENQUIRY_EMAIL } from '../config/site.js';
import { SERVICE_OPTIONS } from '../data/content.js';

const EMPTY = { name: '', email: '', company: '', phone: '', service: SERVICE_OPTIONS[0], msg: '', ok: false };

function Field({ label, error, children }) {
  return (
    <label className={'fld' + (error ? ' bad' : '')}>
      <span>{label}</span>
      {children}
      {error && (
        <div className="e" role="alert">
          {error}
        </div>
      )}
    </label>
  );
}

export default function EnquiryForm() {
  const [v, setV] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const on = (key) => (e) =>
    setV({ ...v, [key]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });

  const mailto =
    'mailto:' + ENQUIRY_EMAIL +
    '?subject=' + encodeURIComponent('Website enquiry: ' + v.service) +
    '&body=' +
    encodeURIComponent(
      [
        'Name: ' + v.name,
        'Email: ' + v.email,
        'Company: ' + v.company,
        'Phone: ' + v.phone,
        'Interested in: ' + v.service,
        '',
        'Message:',
        v.msg,
      ].join('\n')
    );

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!v.name.trim()) next.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(v.email.trim())) next.email = 'Please enter a valid email address.';
    if (v.msg.trim().length < 10) next.msg = 'Please tell us a little about your project.';
    if (!v.ok) next.ok = 'Please confirm to continue.';
    setErrors(next);
    if (Object.keys(next).length) return;
    setSent(true);
    if (ENQUIRY_EMAIL) window.location.href = mailto;
  };

  if (sent) {
    return (
      <div>
        <h3>Thank you, {v.name.trim().split(' ')[0]}.</h3>
        <p style={{ margin: '.8rem 0 1.6rem' }}>
          {ENQUIRY_EMAIL
            ? `Your email app should open with your enquiry ready to send. If it does not, write to us at ${ENQUIRY_EMAIL}.`
            : 'Your enquiry is ready, but the company enquiry email has not been connected to this form yet.'}
        </p>
        <button
          className="btn"
          type="button"
          onClick={() => {
            setV(EMPTY);
            setSent(false);
          }}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={submit}>
      <div className="frow">
        <Field label="Full name *" error={errors.name}>
          <input type="text" autoComplete="name" value={v.name} onChange={on('name')} />
        </Field>
        <Field label="Work email *" error={errors.email}>
          <input type="email" autoComplete="email" value={v.email} onChange={on('email')} />
        </Field>
      </div>
      <div className="frow">
        <Field label="Company">
          <input type="text" autoComplete="organization" value={v.company} onChange={on('company')} />
        </Field>
        <Field label="Phone (optional)">
          <input type="tel" autoComplete="tel" value={v.phone} onChange={on('phone')} />
        </Field>
      </div>
      <Field label="I am interested in">
        <select value={v.service} onChange={on('service')}>
          {SERVICE_OPTIONS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </Field>
      <Field label="Tell us about your project *" error={errors.msg}>
        <textarea
          value={v.msg}
          onChange={on('msg')}
          placeholder="What are you building, and what would success look like?"
        />
      </Field>
      <label className="chk">
        <input type="checkbox" checked={v.ok} onChange={on('ok')} />
        <span>I agree to be contacted about my enquiry.</span>
      </label>
      {errors.ok && (
        <div className="e" role="alert" style={{ marginTop: '-1rem', marginBottom: '1rem' }}>
          {errors.ok}
        </div>
      )}
      <button className="btn" type="submit">
        Send enquiry
      </button>
    </form>
  );
}
