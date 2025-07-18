// Données des semestres
const semesterData = [
  {
    id: 's1',
    name: 'Semestre 1',
    ues: [
      {
        id: 'ue1',
        name: 'UE1 - DEV',
        totalCoeff: 30,
        subjects: [
          { code: 'C11', name: 'C11', coefficient: 6 },
          { code: 'D11', name: 'D11', coefficient: 36 },
          { code: 'E11', name: 'E11', coefficient: 6 },
          { code: 'E12', name: 'E12', coefficient: 27 },
          { code: 'L11', name: 'L11', coefficient: 6 },
          { code: 'M11', name: 'M11', coefficient: 15 },
          { code: 'M12', name: 'M12', coefficient: 15 },
          { code: 'P11', name: 'P11', coefficient: 42 },
          { code: 'S11', name: 'S11', coefficient: 3 },
          { code: 'S12', name: 'S12', coefficient: 3 },
          { code: 'W11', name: 'W11', coefficient: 12 },
          { code: 'SAE1', name: 'SAE', coefficient: 40 }
        ]
      },
      {
        id: 'ue2',
        name: 'UE2 - OPTI',
        totalCoeff: 30,
        subjects: [
          { code: 'C11', name: 'C11', coefficient: 6 },
          { code: 'D11', name: 'D11', coefficient: 36 },
          { code: 'E11', name: 'E11', coefficient: 6 },
          { code: 'E12', name: 'E12', coefficient: 27 },
          { code: 'L11', name: 'L11', coefficient: 6 },
          { code: 'M11', name: 'M11', coefficient: 15 },
          { code: 'M12', name: 'M12', coefficient: 15 },
          { code: 'P11', name: 'P11', coefficient: 42 },
          { code: 'S11', name: 'S11', coefficient: 21 },
          { code: 'S12', name: 'S12', coefficient: 21 },
          { code: 'W11', name: 'W11', coefficient: 12 },
          { code: 'SAE1', name: 'SAE', coefficient: 40 }
        ]
      },
      {
        id: 'ue3',
        name: 'UE3 - SYS',
        totalCoeff: 30,
        subjects: [
          { code: 'C11', name: 'C11', coefficient: 6 },
          { code: 'D11', name: 'D11', coefficient: 36 },
          { code: 'E11', name: 'E11', coefficient: 6 },
          { code: 'E12', name: 'E12', coefficient: 27 },
          { code: 'L11', name: 'L11', coefficient: 12 },
          { code: 'M11', name: 'M11', coefficient: 18 },
          { code: 'M12', name: 'M12', coefficient: 15 },
          { code: 'P11', name: 'P11', coefficient: 24 },
          { code: 'S11', name: 'S11', coefficient: 21 },
          { code: 'S12', name: 'S12', coefficient: 21 },
          { code: 'W11', name: 'W11', coefficient: 18 },
          { code: 'SAE1', name: 'SAE', coefficient: 40 }
        ]
      },
      {
        id: 'ue4',
        name: 'UE4 - DATA',
        totalCoeff: 30,
        subjects: [
          { code: 'C11', name: 'C11', coefficient: 6 },
          { code: 'D11', name: 'D11', coefficient: 36 },
          { code: 'E11', name: 'E11', coefficient: 6 },
          { code: 'E12', name: 'E12', coefficient: 27 },
          { code: 'L11', name: 'L11', coefficient: 6 },
          { code: 'M11', name: 'M11', coefficient: 18 },
          { code: 'M12', name: 'M12', coefficient: 15 },
          { code: 'P11', name: 'P11', coefficient: 24 },
          { code: 'S11', name: 'S11', coefficient: 21 },
          { code: 'S12', name: 'S12', coefficient: 21 },
          { code: 'W11', name: 'W11', coefficient: 18 },
          { code: 'SAE1', name: 'SAE', coefficient: 40 }
        ]
      },
      {
        id: 'ue5',
        name: 'UE5 - GEST',
        totalCoeff: 30,
        subjects: [
          { code: 'E11', name: 'E11', coefficient: 11 },
          { code: 'E12', name: 'E12', coefficient: 11 },
          { code: 'L11', name: 'L11', coefficient: 11 },
          { code: 'W11', name: 'W11', coefficient: 5 },
          { code: 'SAE1', name: 'SAE', coefficient: 40 }
        ]
      },
      {
        id: 'ue6',
        name: 'UE6 - PROF',
        totalCoeff: 30,
        subjects: [
          { code: 'E11', name: 'E11', coefficient: 11 },
          { code: 'E12', name: 'E12', coefficient: 11 },
          { code: 'L11', name: 'L11', coefficient: 11 },
          { code: 'W11', name: 'W11', coefficient: 11 },
          { code: 'SAE1', name: 'SAE', coefficient: 40 }
        ]
      }
    ]
  },
  {
    id: 's2',
    name: 'Semestre 2',
    ues: [
      {
        id: 'ue1',
        name: 'UE1 - DEV',
        totalCoeff: 30,
        subjects: [
          { code: 'A21', name: 'A21', coefficient: 21 },
          { code: 'C21', name: 'C21', coefficient: 6 },
          { code: 'D21', name: 'D21', coefficient: 30 },
          { code: 'E21', name: 'E21', coefficient: 3 },
          { code: 'G21', name: 'G21', coefficient: 12 },
          { code: 'L21', name: 'L21', coefficient: 6 },
          { code: 'M21', name: 'M21', coefficient: 12 },
          { code: 'M22', name: 'M22', coefficient: 12 },
          { code: 'M23', name: 'M23', coefficient: 21 },
          { code: 'P21', name: 'P21', coefficient: 21 },
          { code: 'P22', name: 'P22', coefficient: 12 },
          { code: 'S21', name: 'S21', coefficient: 12 },
          { code: 'S22', name: 'S22', coefficient: 36 },
          { code: 'SAE2', name: 'SAE', coefficient: 40 }
        ]
      },
      {
        id: 'ue2',
        name: 'UE2 - OPTI',
        totalCoeff: 30,
        subjects: [
          { code: 'A21', name: 'A21', coefficient: 21 },
          { code: 'C21', name: 'C21', coefficient: 3 },
          { code: 'D21', name: 'D21', coefficient: 30 },
          { code: 'E21', name: 'E21', coefficient: 17 },
          { code: 'G21', name: 'G21', coefficient: 12 },
          { code: 'L21', name: 'L21', coefficient: 6 },
          { code: 'M21', name: 'M21', coefficient: 12 },
          { code: 'M22', name: 'M22', coefficient: 12 },
          { code: 'M23', name: 'M23', coefficient: 21 },
          { code: 'P21', name: 'P21', coefficient: 15 },
          { code: 'P22', name: 'P22', coefficient: 12 },
          { code: 'S21', name: 'S21', coefficient: 12 },
          { code: 'S22', name: 'S22', coefficient: 15 },
          { code: 'SAE2', name: 'SAE', coefficient: 40 }
        ]
      },
      {
        id: 'ue3',
        name: 'UE3 - SYS',
        totalCoeff: 30,
        subjects: [
          { code: 'A21', name: 'A21', coefficient: 21 },
          { code: 'C21', name: 'C21', coefficient: 9 },
          { code: 'D21', name: 'D21', coefficient: 30 },
          { code: 'E21', name: 'E21', coefficient: 17 },
          { code: 'G21', name: 'G21', coefficient: 30 },
          { code: 'L21', name: 'L21', coefficient: 6 },
          { code: 'M21', name: 'M21', coefficient: 12 },
          { code: 'M22', name: 'M22', coefficient: 12 },
          { code: 'M23', name: 'M23', coefficient: 6 },
          { code: 'P21', name: 'P21', coefficient: 21 },
          { code: 'P22', name: 'P22', coefficient: 12 },
          { code: 'S21', name: 'S21', coefficient: 12 },
          { code: 'S22', name: 'S22', coefficient: 15 },
          { code: 'SAE2', name: 'SAE', coefficient: 40 }
        ]
      },
      {
        id: 'ue4',
        name: 'UE4 - DATA',
        totalCoeff: 30,
        subjects: [
          { code: 'A21', name: 'A21', coefficient: 3 },
          { code: 'C21', name: 'C21', coefficient: 9 },
          { code: 'D21', name: 'D21', coefficient: 30 },
          { code: 'E21', name: 'E21', coefficient: 17 },
          { code: 'G21', name: 'G21', coefficient: 30 },
          { code: 'L21', name: 'L21', coefficient: 6 },
          { code: 'M21', name: 'M21', coefficient: 12 },
          { code: 'M22', name: 'M22', coefficient: 12 },
          { code: 'M23', name: 'M23', coefficient: 6 },
          { code: 'P21', name: 'P21', coefficient: 21 },
          { code: 'P22', name: 'P22', coefficient: 12 },
          { code: 'S21', name: 'S21', coefficient: 12 },
          { code: 'S22', name: 'S22', coefficient: 15 },
          { code: 'SAE2', name: 'SAE', coefficient: 40 }
        ]
      },
      {
        id: 'ue5',
        name: 'UE5 - GEST',
        totalCoeff: 30,
        subjects: [
          { code: 'E21', name: 'E21', coefficient: 17 },
          { code: 'L21', name: 'L21', coefficient: 17 },
          { code: 'SAE2', name: 'SAE', coefficient: 40 }
        ]
      },
      {
        id: 'ue6',
        name: 'UE6 - PROF',
        totalCoeff: 30,
        subjects: [
          { code: 'E21', name: 'E21', coefficient: 17 },
          { code: 'L21', name: 'L21', coefficient: 17 },
          { code: 'SAE2', name: 'SAE', coefficient: 40 }
        ]
      }
    ]
  },
  {
    id: 's3',
    name: 'Semestre 3',
    ues: [
      {
        id: 'ue1',
        name: 'UE1 - DEV',
        totalCoeff: 30,
        subjects: [
          { code: 'A31', name: 'A31', coefficient: 12 },
          { code: 'A32', name: 'A32', coefficient: 15 },
          { code: 'C31', name: 'C31', coefficient: 8 },
          { code: 'D31', name: 'D31', coefficient: 25 },
          { code: 'E31', name: 'E31', coefficient: 5 },
          { code: 'G31-G32', name: 'G31-G32', coefficient: 10 },
          { code: 'L31', name: 'L31', coefficient: 5 },
          { code: 'M31', name: 'M31', coefficient: 17 },
          { code: 'M32', name: 'M32', coefficient: 10 },
          { code: 'P31', name: 'P31', coefficient: 10 },
          { code: 'S31', name: 'S31', coefficient: 5 },
          { code: 'S32', name: 'S32', coefficient: 5 },
          { code: 'W31', name: 'W31', coefficient: 15 },
          { code: 'PPP', name: 'PPP', coefficient: 15 },
          { code: 'SAE3', name: 'SAE', coefficient: 40 }
        ]
      },
      {
        id: 'ue2',
        name: 'UE2 - OPTI',
        totalCoeff: 30,
        subjects: [
          { code: 'A31', name: 'A31', coefficient: 5 },
          { code: 'A32', name: 'A32', coefficient: 8 },
          { code: 'C31', name: 'C31', coefficient: 7 },
          { code: 'D31', name: 'D31', coefficient: 25 },
          { code: 'E31', name: 'E31', coefficient: 10 },
          { code: 'G31-G32', name: 'G31-G32', coefficient: 18 },
          { code: 'L31', name: 'L31', coefficient: 7 },
          { code: 'M31', name: 'M31', coefficient: 10 },
          { code: 'M32', name: 'M32', coefficient: 5 },
          { code: 'P31', name: 'P31', coefficient: 13 },
          { code: 'S31', name: 'S31', coefficient: 22 },
          { code: 'S32', name: 'S32', coefficient: 18 },
          { code: 'W31', name: 'W31', coefficient: 5 },
          { code: 'PPP', name: 'PPP', coefficient: 15 },
          { code: 'SAE3', name: 'SAE', coefficient: 40 }
        ]
      },
      {
        id: 'ue3',
        name: 'UE3 - SYS',
        totalCoeff: 30,
        subjects: [
          { code: 'A31', name: 'A31', coefficient: 5 },
          { code: 'A32', name: 'A32', coefficient: 5 },
          { code: 'C31', name: 'C31', coefficient: 16 },
          { code: 'D31', name: 'D31', coefficient: 25 },
          { code: 'E31', name: 'E31', coefficient: 10 },
          { code: 'G31-G32', name: 'G31-G32', coefficient: 16 },
          { code: 'L31', name: 'L31', coefficient: 8 },
          { code: 'M31', name: 'M31', coefficient: 10 },
          { code: 'M32', name: 'M32', coefficient: 5 },
          { code: 'P31', name: 'P31', coefficient: 13 },
          { code: 'S31', name: 'S31', coefficient: 22 },
          { code: 'S32', name: 'S32', coefficient: 18 },
          { code: 'W31', name: 'W31', coefficient: 10 },
          { code: 'PPP', name: 'PPP', coefficient: 15 },
          { code: 'SAE3', name: 'SAE', coefficient: 40 }
        ]
      },
      {
        id: 'ue4',
        name: 'UE4 - DATA',
        totalCoeff: 30,
        subjects: [
          { code: 'A31', name: 'A31', coefficient: 5 },
          { code: 'A32', name: 'A32', coefficient: 5 },
          { code: 'C31', name: 'C31', coefficient: 16 },
          { code: 'D31', name: 'D31', coefficient: 25 },
          { code: 'E31', name: 'E31', coefficient: 10 },
          { code: 'G31-G32', name: 'G31-G32', coefficient: 16 },
          { code: 'L31', name: 'L31', coefficient: 8 },
          { code: 'M31', name: 'M31', coefficient: 10 },
          { code: 'M32', name: 'M32', coefficient: 5 },
          { code: 'P31', name: 'P31', coefficient: 13 },
          { code: 'S31', name: 'S31', coefficient: 22 },
          { code: 'S32', name: 'S32', coefficient: 18 },
          { code: 'W31', name: 'W31', coefficient: 5 },
          { code: 'PPP', name: 'PPP', coefficient: 15 },
          { code: 'SAE3', name: 'SAE', coefficient: 40 }
        ]
      },
      {
        id: 'ue5',
        name: 'UE5 - GEST',
        totalCoeff: 30,
        subjects: [
          { code: 'E31', name: 'E31', coefficient: 10 },
          { code: 'L31', name: 'L31', coefficient: 8 },
          { code: 'PPP', name: 'PPP', coefficient: 40 },
          { code: 'SAE3', name: 'SAE', coefficient: 40 }
        ]
      },
      {
        id: 'ue6',
        name: 'UE6 - PROF',
        totalCoeff: 30,
        subjects: [
          { code: 'E31', name: 'E31', coefficient: 16 },
          { code: 'L31', name: 'L31', coefficient: 8 },
          { code: 'PPP', name: 'PPP', coefficient: 40 },
          { code: 'SAE3', name: 'SAE', coefficient: 40 }
        ]
      }
    ]
  },
  {
    id: 's4',
    name: 'Semestre 4',
    ues: [
      {
        id: 'ue1',
        name: 'UE1 - DEV',
        totalCoeff: 30,
        subjects: [
          { code: 'A41', name: 'A41', coefficient: 8 },
          { code: 'C41', name: 'C41', coefficient: 6 },
          { code: 'D41', name: 'D41', coefficient: 18 },
          { code: 'G41', name: 'G41', coefficient: 4 },
          { code: 'L41', name: 'L41', coefficient: 4 },
          { code: 'M41', name: 'M41', coefficient: 12 },
          { code: 'P41', name: 'P41', coefficient: 12 },
          { code: 'P42', name: 'P42', coefficient: 8 },
          { code: 'S41', name: 'S41', coefficient: 16 },
          { code: 'W41', name: 'W41', coefficient: 8 },
          { code: 'W42', name: 'W42', coefficient: 8 },
          { code: 'PPP', name: 'PPP', coefficient: 12 },
          { code: 'SAE4', name: 'SAE', coefficient: 18 },
          { code: 'Stage', name: 'Stage', coefficient: 42 }
        ]
      },
      {
        id: 'ue2',
        name: 'UE2 - OPTI',
        totalCoeff: 30,
        subjects: [
          { code: 'A41', name: 'A41', coefficient: 10 },
          { code: 'C41', name: 'C41', coefficient: 22 },
          { code: 'D41', name: 'D41', coefficient: 18 },
          { code: 'G41', name: 'G41', coefficient: 4 },
          { code: 'L41', name: 'L41', coefficient: 13 },
          { code: 'M41', name: 'M41', coefficient: 12 },
          { code: 'P41', name: 'P41', coefficient: 4 },
          { code: 'P42', name: 'P42', coefficient: 8 },
          { code: 'S41', name: 'S41', coefficient: 28 },
          { code: 'W41', name: 'W41', coefficient: 12 },
          { code: 'W42', name: 'W42', coefficient: 4 },
          { code: 'PPP', name: 'PPP', coefficient: 10 },
          { code: 'SAE4', name: 'SAE', coefficient: 18 },
          { code: 'Stage', name: 'Stage', coefficient: 42 }
        ]
      },
      {
        id: 'ue3',
        name: 'UE3 - SYS',
        totalCoeff: 30,
        subjects: [
          { code: 'A41', name: 'A41', coefficient: 13 },
          { code: 'C41', name: 'C41', coefficient: 22 },
          { code: 'D41', name: 'D41', coefficient: 18 },
          { code: 'G41', name: 'G41', coefficient: 13 },
          { code: 'L41', name: 'L41', coefficient: 4 },
          { code: 'M41', name: 'M41', coefficient: 4 },
          { code: 'P41', name: 'P41', coefficient: 8 },
          { code: 'P42', name: 'P42', coefficient: 4 },
          { code: 'S41', name: 'S41', coefficient: 4 },
          { code: 'W41', name: 'W41', coefficient: 8 },
          { code: 'W42', name: 'W42', coefficient: 4 },
          { code: 'PPP', name: 'PPP', coefficient: 10 },
          { code: 'SAE4', name: 'SAE', coefficient: 18 },
          { code: 'Stage', name: 'Stage', coefficient: 42 }
        ]
      },
      {
        id: 'ue4',
        name: 'UE4 - DATA',
        totalCoeff: 30,
        subjects: [
          { code: 'A41', name: 'A41', coefficient: 10 },
          { code: 'C41', name: 'C41', coefficient: 22 },
          { code: 'D41', name: 'D41', coefficient: 18 },
          { code: 'G41', name: 'G41', coefficient: 13 },
          { code: 'L41', name: 'L41', coefficient: 4 },
          { code: 'M41', name: 'M41', coefficient: 4 },
          { code: 'P41', name: 'P41', coefficient: 8 },
          { code: 'P42', name: 'P42', coefficient: 4 },
          { code: 'S41', name: 'S41', coefficient: 4 },
          { code: 'W41', name: 'W41', coefficient: 8 },
          { code: 'W42', name: 'W42', coefficient: 4 },
          { code: 'PPP', name: 'PPP', coefficient: 10 },
          { code: 'SAE4', name: 'SAE', coefficient: 18 },
          { code: 'Stage', name: 'Stage', coefficient: 42 }
        ]
      },
      {
        id: 'ue5',
        name: 'UE5 - GEST',
        totalCoeff: 30,
        subjects: [
          { code: 'L41', name: 'L41', coefficient: 18 },
          { code: 'PPP', name: 'PPP', coefficient: 18 },
          { code: 'SAE4', name: 'SAE', coefficient: 18 },
          { code: 'Stage', name: 'Stage', coefficient: 42 }
        ]
      },
      {
        id: 'ue6',
        name: 'UE6 - PROF',
        totalCoeff: 30,
        subjects: [
          { code: 'L41', name: 'L41', coefficient: 18 },
          { code: 'PPP', name: 'PPP', coefficient: 18 },
          { code: 'SAE4', name: 'SAE', coefficient: 42 },
          { code: 'Stage', name: 'Stage', coefficient: 42 }
        ]
      }
    ]
  },
  {
    id: 's5',
    name: 'Semestre 5',
    ues: [
      {
        id: 'ue1',
        name: 'UE1 - DEV',
        totalCoeff: 30,
        subjects: [
          { code: 'A51', name: 'A51', coefficient: 4 },
          { code: 'A52', name: 'A52', coefficient: 7 },
          { code: 'C51', name: 'C51', coefficient: 10 },
          { code: 'D51', name: 'D51', coefficient: 10 },
          { code: 'E51', name: 'E51', coefficient: 2 },
          { code: 'G51', name: 'G51', coefficient: 3 },
          { code: 'L51', name: 'L51', coefficient: 2 },
          { code: 'M51', name: 'M51', coefficient: 4 },
          { code: 'P51', name: 'P51', coefficient: 7 },
          { code: 'P52', name: 'P52', coefficient: 9 },
          { code: 'S51', name: 'S51', coefficient: 2 },
          { code: 'W51', name: 'W51', coefficient: 2 },
          { code: 'X51', name: 'X51', coefficient: 50 },
          { code: 'X52', name: 'X52', coefficient: 50 },
          { code: 'SAE5', name: 'SAE', coefficient: 50 }
        ]
      },
      {
        id: 'ue2',
        name: 'UE2 - OPTI',
        totalCoeff: 30,
        subjects: [
          { code: 'A51', name: 'A51', coefficient: 5 },
          { code: 'A52', name: 'A52', coefficient: 2 },
          { code: 'C51', name: 'C51', coefficient: 2 },
          { code: 'D51', name: 'D51', coefficient: 5 },
          { code: 'E51', name: 'E51', coefficient: 9 },
          { code: 'G51', name: 'G51', coefficient: 4 },
          { code: 'L51', name: 'L51', coefficient: 13 },
          { code: 'M51', name: 'M51', coefficient: 6 },
          { code: 'P51', name: 'P51', coefficient: 2 },
          { code: 'P52', name: 'P52', coefficient: 6 },
          { code: 'PPP', name: 'PPP', coefficient: 7 },
          { code: 'S51', name: 'S51', coefficient: 7 },
          { code: 'W51', name: 'W51', coefficient: 2 },
          { code: 'X51', name: 'X51', coefficient: 2 },
          { code: 'X52', name: 'X52', coefficient: 2 },
          { code: 'SAE5', name: 'SAE', coefficient: 50 }
        ]
      },
      {
        id: 'ue6',
        name: 'UE6 - PROF',
        totalCoeff: 30,
        subjects: [
          { code: 'A51', name: 'A51', coefficient: 2 },
          { code: 'A52', name: 'A52', coefficient: 13 },
          { code: 'C51', name: 'C51', coefficient: 5 },
          { code: 'D51', name: 'D51', coefficient: 9 },
          { code: 'E51', name: 'E51', coefficient: 13 },
          { code: 'G51', name: 'G51', coefficient: 6 },
          { code: 'L51', name: 'L51', coefficient: 2 },
          { code: 'M51', name: 'M51', coefficient: 6 },
          { code: 'P51', name: 'P51', coefficient: 2 },
          { code: 'P52', name: 'P52', coefficient: 2 },
          { code: 'PPP', name: 'PPP', coefficient: 2 },
          { code: 'S51', name: 'S51', coefficient: 2 },
          { code: 'W51', name: 'W51', coefficient: 2 },
          { code: 'X51', name: 'X51', coefficient: 2 },
          { code: 'X52', name: 'X52', coefficient: 2 },
          { code: 'SAE5', name: 'SAE', coefficient: 50 }
        ]
      }
    ]
  },
  {
    id: 's6',
    name: 'Semestre 6',
    ues: [
      {
        id: 'ue1',
        name: 'UE1 - DEV',
        totalCoeff: 30,
        subjects: [
          { code: 'A61', name: 'A61', coefficient: 18 },
          { code: 'C61', name: 'C61', coefficient: 7 },
          { code: 'E61', name: 'E61', coefficient: 12 },
          { code: 'G61', name: 'G61', coefficient: 12 },
          { code: 'P61', name: 'P61', coefficient: 22 },
          { code: 'PPP', name: 'PPP', coefficient: 10 },
          { code: 'SAE6', name: 'SAE', coefficient: 10 },
          { code: 'Stage', name: 'Stage', coefficient: 50 }
        ]
      },
      {
        id: 'ue2',
        name: 'UE2 - OPTI',
        totalCoeff: 30,
        subjects: [
          { code: 'A61', name: 'A61', coefficient: 18 },
          { code: 'C61', name: 'C61', coefficient: 22 },
          { code: 'E61', name: 'E61', coefficient: 2 },
          { code: 'G61', name: 'G61', coefficient: 7 },
          { code: 'P61', name: 'P61', coefficient: 22 },
          { code: 'PPP', name: 'PPP', coefficient: 10 },
          { code: 'SAE6', name: 'SAE', coefficient: 10 },
          { code: 'Stage', name: 'Stage', coefficient: 50 }
        ]
      },
      {
        id: 'ue6',
        name: 'UE6 - PROF',
        totalCoeff: 30,
        subjects: [
          { code: 'A61', name: 'A61', coefficient: 18 },
          { code: 'C61', name: 'C61', coefficient: 7 },
          { code: 'E61', name: 'E61', coefficient: 12 },
          { code: 'G61', name: 'G61', coefficient: 12 },
          { code: 'P61', name: 'P61', coefficient: 2 },
          { code: 'PPP', name: 'PPP', coefficient: 10 },
          { code: 'SAE6', name: 'SAE', coefficient: 10 },
          { code: 'Stage', name: 'Stage', coefficient: 50 }
        ]
      }
    ]
  }
];