export const loadCurrentUser = async () => {
    const userIdResponse = await fetch('/user/getCurrentId', {redirect: "error"});
    if (!userIdResponse.ok) {
        return null;
    }
    const userId = await userIdResponse.json();

    return await getUser(userId);
};


export const getUser = async (userId) => {
    const userDataResponse = await fetch(`/user/${userId}`, {redirect: "error"});
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


export const getAuctionInfo = async (auctionId) => {
    const response = await fetch(`/auction/${auctionId}`, {redirect: "error"});
    if (!response.ok) {
        return null;
    }
    const auction = await response.json();
    const user = await getUser(auction.userId);

    return {
        id: auction.id,
        minBid: auction.minOffer,
        author: user.username,
        title: auction.title,
        description: auction.description,
        start_date: new Date(auction.startAt),
        end_date: new Date(auction.endAt),
        image: `/auction/getImage/${auction.id}`,
    }
}


export const createAuction = async (auction, user) => {
    // create an auction
    const data = {
        userId: user.id,
        title: auction.title,
        description: auction.description,
        minOffer: auction.minBid,
        startAt: new Date(),
        endAt: auction.endAt,
    };
    const response = await fetch(`/auction`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    if (!response.ok)
        return false;
    const auctionDto = await response.json();

    // upload the image
    if (!auction.image)
        return auctionDto.id;
    const formData = new FormData();
    formData.append("image", auction.image);
    const imageUploadResponse = await fetch(`/auction/uploadImage/${auctionDto.id}`, {
        method: "POST",
        body: formData,
    })
    if (!imageUploadResponse.ok) {
        // clean up the created auction
        await fetch(`/auction/${auctionDto.id}`, {
            method: "DELETE",
        })

        return false;
    }

    return auctionDto.id;
}


export const editAuction = async (auction, user) => {
    // create an auction
    const data = {
        userId: user.id,
        title: auction.title,
        description: auction.description,
        minOffer: auction.minBid,
        startAt: new Date(),
        endAt: auction.endAt,
    };
    const response = await fetch(`/auction/${auction.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    if (!response.ok)
        return false;
    return auction.id;
}
