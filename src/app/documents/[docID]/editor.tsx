"use client";
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export const Editor = () => {
    const editor = useEditor({
        extensions: [StarterKit],
        editorProps: {
            attributes: {
                class: "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none p-4"
            }
        }
    });

    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="bg-white w-full max-w-4xl p-6">
                <div className="bg-white w-[210mm] h-[297mm] p-10 shadow-lg border">
                    <EditorContent editor={editor} />
                </div>
            </div>
        </div>
    );
};

export default Editor;