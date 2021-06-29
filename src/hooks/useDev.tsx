import React, { createContext, useState, useContext } from 'react';

interface DevProviderProps {
  children: React.ReactNode;
}

export interface skillData {
  skill: string;
}

interface DevData {
  name: string;
  email: string;
  habilities?: skillData[];
  date?: Date;
}

interface DevContextData {
  devs: DevData[];
  handleName: (name: string) => void;
  handleEmail: (email: string) => void;
  handleAddSkill: (skill: string) => void;
  handleRemoveSkill: (skill: string) => void;
  handleAddDev: ({ name, email, habilities }: DevData) => void;
  nameDev: string;
  emailDev: string;
  skillsList: string[];
  skills: skillData[];
}
const DevContext = createContext<DevContextData>({} as DevContextData);

export function DevProvider({ children }: DevProviderProps): JSX.Element {
  const [nameDev, setNameDev] = useState('');
  const [emailDev, setEmailDev] = useState('');
  const [skills, setSkills] = useState<skillData[]>([]);
  const [devs, setDevs] = useState<DevData[]>(() => {
    const storagedDev = localStorage.getItem('@Oceaning:devs');

    if (storagedDev) {
      return JSON.parse(storagedDev);
    }

    return [];
  });

  const skillsList = [
    'React',
    'React Native',
    'PHP',
    'Java',
    'JavaScript',
    'C#',
    'C++',
    'Ruby',
    'CSS',
    'HTML5',
    'NodeJs',
  ];

  const handleName = (name: string) => {
    setNameDev(name);
  };

  const handleEmail = (email: string) => {
    setEmailDev(email);
  };

  const handleAddSkill = (skill: string) => {
    setSkills([...skills, { skill }]);
  };

  const handleRemoveSkill = (skill: string) => {
    const newSkills = skills.filter(data => data.skill !== skill);

    setSkills([...newSkills]);
  };

  const handleAddDev = ({ name, email, habilities }: DevData) => {
    setDevs([
      ...devs,
      {
        name,
        email,
        date: new Date(),
        habilities,
      },
    ]);

    localStorage.setItem(
      '@Oceaning:devs',
      JSON.stringify([
        ...devs,
        {
          name,
          email,
          date: new Date(),
          habilities,
        },
      ]),
    );
  };

  return (
    <DevContext.Provider
      value={{
        nameDev,
        emailDev,
        devs,
        handleAddDev,
        handleAddSkill,
        handleEmail,
        handleName,
        handleRemoveSkill,
        skillsList,
        skills,
      }}
    >
      {children}
    </DevContext.Provider>
  );
}

export function useDev(): DevContextData {
  const context = useContext(DevContext);

  return context;
}
