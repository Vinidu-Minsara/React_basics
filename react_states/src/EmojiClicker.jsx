import {useState} from "react";
import {v4 as uuid} from "uuid";

function EmojiClicker(){
    const randomEmoji = () => {
        const choices = ['🥰','🤣','😅','😎','🤗','😡','😱'];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    const [emojis, setEmojis] = useState([{id: uuid(), emoji: randomEmoji()}]);

    const addEmoji = () => {
        setEmojis((prevState) => [...prevState, {id: uuid(), emoji: randomEmoji()}]);
    };

    const deleteEmoji = (id) => {
        setEmojis((prevState) => {
            return prevState.filter(emoji => emoji.id !== id);
        })
    };

    const makeAllHearts = () => {
        setEmojis(prevState => {
            return prevState.map((emoji) => {
                return { ...emoji, emoji: '❤️'}
            })
        })
    }

    return (
        <div>
            {emojis.map((emoji) => (
                <span key={emoji.id} style={{fontSize: '4rem'}} onClick={() => {deleteEmoji((emoji.id))}}>
                    {emoji.emoji}
                </span>
            ))}
            <button onClick={addEmoji}>Add emoji</button>
            <button onClick={makeAllHearts}>Make All Hearts</button>
        </div>
    )
}

export default EmojiClicker;