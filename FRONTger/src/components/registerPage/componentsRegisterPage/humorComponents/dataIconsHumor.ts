import EmojiFrown from "../../../../assets/icons/humor/emoji-frown.svg";
import EmojiLaughing from "../../../../assets/icons/humor/emoji-laughing.svg";
import EmojiSmile from "../../../../assets/icons/humor/emoji-smile.svg";

interface IconInterface {
    icon: string;
    name: string;
}

export const dataIconsHumor: Array<IconInterface> = [
    {
        icon: EmojiFrown,
        name: "happy",
    },
    {
        icon: EmojiLaughing,
        name: "normal",
    },
    {
        icon: EmojiSmile,
        name: "sad",
    },
];
