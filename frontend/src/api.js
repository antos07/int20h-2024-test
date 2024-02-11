export const loadCurrentUser = async () => {
    const userIdResponse = await fetch('/user/getCurrentId', { redirect: "error" });
    if (!userIdResponse.ok) {
        return null;
    }
    const userId = await userIdResponse.json();

    return await getUser(userId);
};


export const getUser = async (userId) => {
    const userDataResponse = await fetch(`/user/${userId}`, { redirect: "error" });
    if (!userDataResponse.ok) {
        return null;
    }

    return {
        id: userId,
        ...await userDataResponse.json(),
    }
}


export const listAuctions = async () => {
    const response = await fetch('/auction/getAll');
    if (!response.ok) {
        return [];
    }
    const auctionDtos = await response.json();

    const auctionPromises = auctionDtos.map(async (auction) => {
        const user = await getUser(auction.userId);

        return {
            id: auction.id,
            title: auction.title,
            description: auction.description,
            start_date: new Date(auction.startAt),
            end_date: new Date(auction.endAt),
            author: user.username,
            image: `/auction/getImage/${auction.id}`,
        }
    });

    return await Promise.all(auctionPromises);
}
