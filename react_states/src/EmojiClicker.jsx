import {useState} from "react";
import {v4 as uuid} from "uuid";

function EmojiClicker(){
    const randomEmoji = () => {
        const choices = ['🥰','🤣','😅','😎','🤗','😡','😱'];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    const [emojis, setEmojis] = useState([{id: uuid(), emoji: randomEmoji()}]);

    const addEmoji = () => {
        setEmojis((oldEmojis) => [...oldEmojis, {id: uuid(), emoji: randomEmoji()}]);
    };

    const deleteEmoji = (id) => {
        setEmojis((oldEmojis) => {
            return oldEmojis.filter(emoji => emoji.id !== id);
        })
    };

    return (
        <div>
            {emojis.map((emoji) => (
                <span key={emoji.id} style={{fontSize: '4rem'}} onClick={() => {deleteEmoji((emoji.id))}}>
                    {emoji.emoji}
                </span>
            ))}
            <button onClick={addEmoji}>Add emoji</button>
        </div>
    )
}

export default EmojiClicker;