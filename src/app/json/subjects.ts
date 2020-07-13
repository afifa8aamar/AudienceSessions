import { ISubject } from '../models/ISubject';
import { SubjectTypeEnum } from '../models/ISubjectType';

export enum SubjectEnum {
    Math ,
    English,
    Georgian ,
    ArchitectureStudio ,
    InterrogativeDesign,
    IntroductionToBioengineering,
    FundamentalsOfBiology,
    IntroductionToBiology,
    SystemsBiology,
    BiologicalChemistry,
    IntroductionToPsychology,
    IntroductionToModelingAndSimulation,
    IntroductoryQuantumMechanics,
    DarwinAndDesign ,
    GameDesign,
    PrinciplesOfMicroeconomics,
    MulticoreProgramming,
    AdvancedDataStructures ,
    MediaEducationAndTheMarketplace,
    SeminarInHistoricalMethods,
    LinearAlgebra,
    GraphTheoryAndAdditiveCombinatorics,
    QuantumPhysicsI ,
    QuantumPhysicsII,
    NonlinearProgramming,
    FinanceTheory,
    HighlightsOfCalculus,

}


export const subjects : ISubject[] = [{
    Id : 1,
    Subject : SubjectEnum.AdvancedDataStructures,
    Name : 'Advanced Data Structures',
    SubjectType : SubjectTypeEnum.Theoretical,
    Count :3
},{
    Id : 2,
    Subject : SubjectEnum.ArchitectureStudio, 
    Name : 'Architecture Studio',
    SubjectType : SubjectTypeEnum.Theoretical ,
    Count :3
},{
    Id : 3,
    Subject : SubjectEnum.BiologicalChemistry, 
    Name : 'Biological Chemistry',
    SubjectType : SubjectTypeEnum.Theoretical ,
    Count :3
},{
    Id : 4,
    Subject : SubjectEnum.DarwinAndDesign, 
    Name : 'Darwin And Design',
    SubjectType : SubjectTypeEnum.Theoretical ,
    Count :3
},{
    Id : 5,
    Subject : SubjectEnum.English, 
    Name : 'English',
    SubjectType : SubjectTypeEnum.Theoretical ,
    Count :5
},
{
    Id : 6,
    Subject : SubjectEnum.FundamentalsOfBiology, 
    Name : 'Fundamentals Of Biology',
    SubjectType : SubjectTypeEnum.Theoretical ,
    Count :3
},
{
    Id : 7,
    Subject : SubjectEnum.GameDesign, 
    Name : 'Game Design',
    SubjectType : SubjectTypeEnum.Theoretical ,
    Count :3
},
{
    Id : 8,
    Subject : SubjectEnum.Georgian, 
    Name : 'Georgian',
    SubjectType : SubjectTypeEnum.Theoretical ,
    Count :3
},
{
    Id : 9,
    Subject : SubjectEnum.GraphTheoryAndAdditiveCombinatorics, 
    Name : 'Graph Theory And Additive Combinatorics',
    SubjectType : SubjectTypeEnum.Theoretical ,
    Count :3
},
{
    Id : 10,
    Subject : SubjectEnum.InterrogativeDesign, 
    Name : 'Interrogative Design',
    SubjectType : SubjectTypeEnum.Theoretical ,
    Count :3
},
{
    Id : 11,
    Subject : SubjectEnum.IntroductionToBioengineering, 
    Name : 'Introduction To Bioengineering',
    SubjectType : SubjectTypeEnum.Theoretical ,
    Count :3
},
{
    Id : 12,
    Subject : SubjectEnum.IntroductionToBiology, 
    Name : 'Introduction To Biology',
    SubjectType : SubjectTypeEnum.Theoretical ,
    Count :3
},
{
    Id : 13,
    Subject : SubjectEnum.IntroductionToModelingAndSimulation, 
    Name : 'Introduction To Modeling And Simulation',
    SubjectType : SubjectTypeEnum.Theoretical ,
    Count :3
},
{
    Id : 14,
    Subject : SubjectEnum.IntroductionToPsychology, 
    Name : 'Introduction To Psychology',
    SubjectType : SubjectTypeEnum.Theoretical ,
    Count :3
},
{
    Id : 15,
    Subject : SubjectEnum.IntroductoryQuantumMechanics, 
    Name : 'Introductory Quantum Mechanics',
    SubjectType : SubjectTypeEnum.Theoretical ,
    Count :3
},
{
    Id : 16,
    Subject : SubjectEnum.LinearAlgebra, 
    Name : 'Linear Algebra',
    SubjectType : SubjectTypeEnum.Theoretical ,
    Count :3
},
{
    Id : 17,
    Subject : SubjectEnum.Math, 
    Name : 'Math',
    SubjectType : SubjectTypeEnum.Theoretical ,
    Count :3
},
{
    Id : 18,
    Subject : SubjectEnum.MediaEducationAndTheMarketplace, 
    Name : 'MediaEducation And The Marketplace',
    SubjectType : SubjectTypeEnum.Theoretical ,
    Count :3
},
{
    Id : 19,
    Subject : SubjectEnum.MulticoreProgramming, 
    Name : 'Multicore Programming',
    SubjectType : SubjectTypeEnum.Theoretical ,
    Count :3
},
{
    Id : 20,
    Subject : SubjectEnum.PrinciplesOfMicroeconomics, 
    Name : 'Principles Of Microeconomics',
    SubjectType : SubjectTypeEnum.Theoretical ,
    Count :3
},
{
    Id : 21,
    Subject : SubjectEnum.QuantumPhysicsI, 
    Name : 'Quantum Physics I',
    SubjectType : SubjectTypeEnum.Theoretical ,
    Count :3
},
{
    Id : 22,
    Subject : SubjectEnum.QuantumPhysicsII, 
    Name : 'Quantum Physics II',
    SubjectType : SubjectTypeEnum.Theoretical ,
    Count :3
},
{
    Id : 23,
    Subject : SubjectEnum.NonlinearProgramming, 
    Name : 'Nonlinear Programming',
    SubjectType : SubjectTypeEnum.Theoretical ,
    Count :3
},
{
    Id : 24,
    Subject : SubjectEnum.FinanceTheory, 
    Name : 'Finance Theory',
    SubjectType : SubjectTypeEnum.Theoretical ,
    Count : 10
},
{
    Id : 25,
    Subject : SubjectEnum.HighlightsOfCalculus, 
    Name : 'Highlights Of Calculus',
    SubjectType : SubjectTypeEnum.Theoretical ,
    Count :3
}]

//count = 82 subject;
