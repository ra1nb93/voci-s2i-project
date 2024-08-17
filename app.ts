// Object creation and functionality verification

import { MediaProfessional, TrainingProgram, Platform} from "./classes";

const professional1 = new MediaProfessional("Maria", "Rossi", "Journalism", 5, ["human rights", "politics"]);
const professional2 = new MediaProfessional("Giulia", "Verdi", "Directing", 8, ["documentaries", "social cinema"]);

const program1 = new TrainingProgram("Mentorship for Journalists", "A program to support the professional growth of journalists", "Journalism", 12);
const program2 = new TrainingProgram("Directing for Change", "A program dedicated to emerging directors", "Directing", 16);

const platform1 = new Platform("Voices Blog", "online", "A platform dedicated to sharing stories and opinions", ["journalism", "human rights"]);
const platform2 = new Platform("Voices Video", "audiovisual", "A video channel for documentaries and interviews", ["documentaries", "social cinema"]);

// Linking professionals, training programs, and platforms

professional1.joinProgram(program1);
professional2.joinProgram(program2);

platform1.publishContent(professional1, "An article on human rights in Europe.");
platform2.publishContent(professional2, "A documentary on the challenges faced by emerging directors.");
