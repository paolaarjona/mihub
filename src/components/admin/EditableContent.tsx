
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Edit2, Check, X } from 'lucide-react';

interface EditableContentProps {
  content: string;
  type?: 'text' | 'textarea' | 'title';
  onSave: (newContent: string) => void;
  className?: string;
  placeholder?: string;
  editMode?: boolean;
}

const EditableContent = ({ 
  content, 
  type = 'text', 
  onSave, 
  className = '', 
  placeholder = '',
  editMode = false 
}: EditableContentProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(content);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    setEditValue(content);
  }, [content]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleSave = () => {
    onSave(editValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(content);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && type !== 'textarea') {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (!editMode) {
    return (
      <span className={className}>
        {content}
      </span>
    );
  }

  if (isEditing) {
    return (
      <div className="flex items-center gap-2 w-full">
        {type === 'textarea' ? (
          <Textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className={`${className} min-h-[100px]`}
            placeholder={placeholder}
          />
        ) : (
          <Input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className={className}
            placeholder={placeholder}
          />
        )}
        <div className="flex gap-1">
          <Button size="sm" onClick={handleSave}>
            <Check className="h-3 w-3" />
          </Button>
          <Button size="sm" variant="outline" onClick={handleCancel}>
            <X className="h-3 w-3" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative inline-block w-full">
      <span className={`${className} ${editMode ? 'hover:bg-yellow-50 hover:outline hover:outline-1 hover:outline-yellow-300 rounded px-1' : ''}`}>
        {content}
      </span>
      {editMode && (
        <Button
          size="sm"
          variant="ghost"
          className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 p-0"
          onClick={() => setIsEditing(true)}
        >
          <Edit2 className="h-3 w-3" />
        </Button>
      )}
    </div>
  );
};

export default EditableContent;
