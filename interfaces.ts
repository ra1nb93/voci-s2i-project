// Definition of interfaces

export interface IMediaProfessional {
    firstName: string;
    lastName: string;
    specialization: string;
    experience: number;
    interests: string[];
    joinProgram(program: ITrainingProgram): void;
}

export interface ITrainingProgram {
    title: string;
    description: string;
    fieldOfSpecialization: string;
    duration: number; // duration in weeks
    participantList: IMediaProfessional[];
    addParticipant(professional: IMediaProfessional): void;
}

export interface IPlatform {
    name: string;
    type: string; // printed, online, audiovisual
    description: string;
    contentCategories: string[];
    publishContent(professional: IMediaProfessional, content: string): void;
}
