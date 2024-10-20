
// QuillEditor.jsx
import { useEffect, useRef } from 'react';

const QuillEditor = ({ onChange }) => {
  const quillRef = useRef(null);
  
  useEffect(() => {
    // Initialize Quill
    const quill = new Quill(quillRef.current, {
      theme: 'snow',
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline'],
          ['link', 'image', 'video'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'font': [] }],
          [{ 'align': [] }],
        ],
      },
    });

    // Handle text change
    quill.on('text-change', () => {
      const content = quill.root.innerHTML;
      onChange(content);  // Pass content to parent
    });

    return () => {
      quill.enable(false);  // Cleanup on unmount
    };
  }, [onChange]);

  return (
    <div ref={quillRef} style={{ height: '300px' }} />
  );
};

export default QuillEditor;
