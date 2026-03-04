  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 12 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <button
          onClick={() => setVisible(true)}
          aria-pressed={visible}
          style={{ padding: '6px 12px', borderRadius: 6 }}
        >
          Show
        </button>

        <button
          onClick={() => setVisible(false)}
          aria-pressed={!visible}
          style={{ padding: '6px 12px', borderRadius: 6 }}
        >
          Hide
        </button>

        <span
          style={{
            marginLeft: 12,
            fontWeight: 600,
            display: visible ? 'inline' : 'none'
          }}
          aria-hidden={!visible}
        >
          hello world
        </span>
      </div>
    </div>
  );

