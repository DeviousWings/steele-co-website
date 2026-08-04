import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

export default function BuildLogDrawer({ isOpen, onClose }) {
  const [content, setContent] = useState('Loading latest README from repository...');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Fetches the live README directly from your public GitHub repository
      fetch('https://raw.githubusercontent.com/deviouswings/steele-co-website/main/README.md')
        .then((res) => {
          if (!res.ok) throw new Error('Failed to load README');
          return res.text();
        })
        .then((text) => {
          setContent(text);
          setError(false);
        })
        .catch(() => {
          setContent('Unable to fetch live README.md. Verify repository branch name is "main".');
          setError(true);
        });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm no-print">
      <div className="w-full max-w-xl bg-obsidian border-l border-hairline h-full p-6 overflow-y-auto text-muted flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex justify-between items-center pb-4 mb-6 border-b border-hairline">
            <div>
              <h2 className="text-sm font-bold text-cyan uppercase tracking-wider">
                Live Dev Log & README
              </h2>
              <p className="text-[10px] text-muted">Synced directly from GitHub Repository</p>
            </div>
            <button
              onClick={onClose}
              className="text-muted hover:text-white font-bold text-lg px-2"
            >
              ✕
            </button>
          </div>

          {/* Rendered Markdown Body */}
          <div className="space-y-4 text-xs leading-relaxed">
            <ReactMarkdown
              components={{
                h1: ({ node, ...props }) => <h1 className="text-lg font-bold text-white mb-2" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-sm font-bold text-gold mt-4 mb-2 border-b border-hairline pb-1" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-xs font-bold text-cyan mt-3 mb-1" {...props} />,
                p: ({ node, ...props }) => <p className="mb-2 text-muted" {...props} />,
                li: ({ node, ...props }) => <li className="ml-4 list-disc text-muted" {...props} />,
                code: ({ node, ...props }) => <code className="bg-surface text-cyan px-1 py-0.5 rounded text-[11px]" {...props} />
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Footer Close */}
        <div className="pt-6 mt-6 border-t border-hairline flex justify-end">
          <button
            onClick={onClose}
            className="border border-hairline hover:border-cyan text-xs text-muted hover:text-cyan px-4 py-1.5 rounded transition-colors"
          >
            Close Dev Log
          </button>
        </div>
      </div>
    </div>
  );
}
