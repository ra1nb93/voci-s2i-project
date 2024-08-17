import { IMediaProfessional, ITrainingProgram, IPlatform } from "./interfaces";

// Implementation of classes

export class MediaProfessional implements IMediaProfessional {
    firstName: string;
    lastName: string;
    specialization: string;
    experience: number;
    interests: string[];

    constructor(firstName: string, lastName: string, specialization: string, experience: number, interests: string[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.specialization = specialization;
        this.experience = experience;
        this.interests = interests;
    }

    joinProgram(program: ITrainingProgram): void {
        program.addParticipant(this);
        console.log(`${this.firstName} ${this.lastName} joined the program: ${program.title}`);
    }
}

export class TrainingProgram implements ITrainingProgram {
    title: string;
    description: string;
    fieldOfSpecialization: string;
    duration: number;
    participantList: IMediaProfessional[] = [];

    constructor(title: string, description: string, fieldOfSpecialization: string, duration: number) {
        this.title = title;
        this.description = description;
        this.fieldOfSpecialization = fieldOfSpecialization;
        this.duration = duration;
    }

    addParticipant(professional: IMediaProfessional): void {
        this.participantList.push(professional);
        console.log(`Participant ${professional.firstName} ${professional.lastName} added to the program ${this.title}`);
    }
}

export class Platform implements IPlatform {
    name: string;
    type: string;
    description: string;
    contentCategories: string[];

    constructor(name: string, type: string, description: string, contentCategories: string[]) {
        this.name = name;
        this.type = type;
        this.description = description;
        this.contentCategories = contentCategories;
    }

    publishContent(professional: IMediaProfessional, content: string): void {
        console.log(`The content by ${professional.firstName} ${professional.lastName} has been published on ${this.name}: ${content}`);
    }
}
