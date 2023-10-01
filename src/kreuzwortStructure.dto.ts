export class KreuzwortStructureDto {
    lines: KreuzwortLine[];
    users: string[];
}

export class KreuzwortLine {
    id: number;
    user: string;
    question: string;
    answer: string;
    significtantLetter: number
}