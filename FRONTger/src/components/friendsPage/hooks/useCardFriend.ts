import { Ref, ref, watch } from "vue";
import { useRouter } from "vue-router";

export function useCardFriend(
    id: string,
    img: string,
    humor: string,
    nick: string,
    searchText: string,
    describe: string
): [
    string,
    string,
    string,
    string,
    string,
    Ref<string>,
    (idFriend: string) => void,
    Ref<boolean>,
    (bool: boolean) => void
] {
    const router = useRouter();
    const nickWithHighlight = ref<string>(setHighlightNick());

    const openModal = ref<boolean>(false);

    watch(
        () => nick,
        () => (nickWithHighlight.value = setHighlightNick())
    );

    function setHighlightNick() {
        const findIndex = nick.toLowerCase().indexOf(searchText.toLowerCase());
        if (findIndex === -1) return nick;
        const lengthSearchText = searchText.length;
        return `${nick.slice(0, findIndex)}<span>${nick.slice(
            findIndex,
            findIndex + lengthSearchText
        )}</span>${nick.slice(findIndex + lengthSearchText)}`;
    }

    function routeTo(idFriend: string) {
        router.push(`/friendProfile/${idFriend}`);
    }

    function toggleModal(bool: boolean) {
        openModal.value = bool;
    }

    return [id, img, humor, describe, searchText, nickWithHighlight, routeTo, openModal, toggleModal];
}