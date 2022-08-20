export type AddCardType = {
    card: AddedCardType;
};

type AddedCardType = {
    cardsPack_id: string;
    question?: string;
    answer?: string;
    grade?: GradeType;
    shots?: GradeType;
    answerImg?: string;
    questionImg?: string;
    questionVideo?: string;
    answerVideo?: string;
};

type GradeType = 0 | 1 | 2 | 3 | 4 | 5;
