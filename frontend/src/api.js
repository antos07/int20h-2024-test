export const loadCurrentUser = async () => {
    const userIdResponse = await fetch('/user/getCurrentId', { redirect: "error" });
    if (!userIdResponse.ok) {
        return null;
    }
    const userId = await userIdResponse.json();

    const userDataResponse = await fetch(`/user/${userId}`, { redirect: "error" });
    if (!userDataResponse.ok) {
        return null;
    }

    return {
        id: userId,
        ...await userDataResponse.json(),
    }
};