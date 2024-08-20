import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

const EmojiPickerComponent = ({ children, setEmojiIcon }) => {
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  return (
    <div>
      <div onClick={() => setOpenEmojiPicker(true)}>{children}</div>
      {openEmojiPicker && (
        <div className="absolute z-10 mt-2 border border-gray-300 rounded-xl">
          <EmojiPicker
            onEmojiClick={(e) => {
              setEmojiIcon(e.emoji);
              setOpenEmojiPicker(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default EmojiPickerComponent;
