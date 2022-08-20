export type UpdateCardType = {
    card: UpdatedCardType;
};

type UpdatedCardType = {
    // lots of types aren't necessary here you need to check its later
    _id: string;
    cardsPack_id?: string;
    user_id?: string;
    answer?: string;
    question?: string;
    grade?: number;
    shots?: number;
    comments?: string;
    type?: string;
    rating?: number;
    more_id?: string;
    created?: string;
    updated?: string;
};
