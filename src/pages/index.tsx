import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4 my-[5em]">
        <h1 className="text-[2em] sm:text-[2em] md:text-[2.5em]  text-center font-bold my-20">
          Dungeons And Dragons - Character Creation{" "}
        </h1>
        <h2 className="text-3xl text-center font-bold my-4">
          Basic Informations and Appeareances
        </h2>
        <form className="w-full sm:w-full md:w-1/2 lg:w-1/2 mx-auto flex flex-col justify-center">
          <div className="input-container">
            <input
              className="input-field"
              type="text"
              placeholder="Select the character’s name"
              aria-label="Full name"
            />
            <button className="generate-button" type="button">
              Generate
            </button>
          </div>
          <div className="input-container">
            <select
              className="input-field select-field"
              placeholder="Select the character’s name"
              aria-label="Full name"
            >
              <option value="elf">Elf</option>
              <option value="human">Human</option>
              <option value="orc">Orc</option>
              <option value="dwarf">Dwarf</option>
            </select>
          </div>
          <div className="input-container">
            <input
              className="input-field"
              type="number"
              min="16"
              max="80"
              placeholder="Select the character’s age"
              aria-label="Full name"
            />
          </div>
          <div className="input-container">
            <select
              className="input-field select-field"
              placeholder="Select the character's class"
              aria-label="Character class"
            >
              <option value="barbarian">Barbarian</option>
              <option value="bard">Bard</option>
              <option value="cleric">Cleric</option>
              <option value="druid">Druid</option>
              <option value="fighter">Fighter</option>
              <option value="monk">Monk</option>
              <option value="paladin">Paladin</option>
              <option value="ranger">Ranger</option>
              <option value="rogue">Rogue</option>
              <option value="sorcerer">Sorcerer</option>
              <option value="warlock">Warlock</option>
              <option value="wizard">Wizard</option>
            </select>
          </div>
          <div className="input-container">
            <input
              className="input-field"
              type="text"
              placeholder="Enter your hair description"
              aria-label="Hair description"
            />
            <button className="generate-button" type="button">
              Generate
            </button>
          </div>
          <div className="input-container">
            <input
              className="input-field"
              type="text"
              placeholder="Enter your eyes description"
              aria-label="Eyes description"
            />
            <button className="generate-button" type="button">
              Generate
            </button>
          </div>
          <div className="input-container">
            <input
              className="input-field"
              type="text"
              placeholder="Enter your face description"
              aria-label="Face description"
            />
            <button className="generate-button" type="button">
              Generate
            </button>
          </div>
          <h2 className="text-3xl text-center font-bold my-4">
            Personal Characteristics
          </h2>
          <div className="input-container">
            <input
              className="input-field"
              type="text"
              placeholder="Enter Personality Traits"
              aria-label="Personality Traits"
            />
          </div>
          <h3 className="text-2xl text-left font-bold my-4">Ideals</h3>
          <div className="input-container">
            <input
              className="input-field"
              type="text"
              placeholder="What are the principles that you will never betray?"
              aria-label="Principle Ideal"
            />
          </div>
          <div className="input-container">
            <input
              className="input-field"
              type="text"
              placeholder="What would prompt you to make sacrifices?"
              aria-label="Sacrifice Ideal"
            />
          </div>
          <div className="input-container">
            <input
              className="input-field"
              type="text"
              placeholder="What drives you to act and guides your goals and ambitions?"
              aria-label="Goals and Ambitions Ideal"
            />
          </div>
          <div className="input-container">
            <input
              className="input-field"
              type="text"
              placeholder="What is the single most important thing you strive for?"
              aria-label="Most Important Thing Ideal"
            />
          </div>
          <h3 className="text-2xl text-left font-bold my-4">Bonds</h3>
          <div className="input-container">
            <input
              className="input-field"
              type="text"
              placeholder="Whom do you care most about?"
              aria-label="Care Most Bond"
            />
          </div>
          <div className="input-container">
            <input
              className="input-field"
              type="text"
              placeholder="To what place do you feel a special connection?"
              aria-label="Special Place Bond"
            />
          </div>
          <div className="input-container">
            <input
              className="input-field"
              type="text"
              placeholder="What is your most treasured possession?"
              aria-label="Treasure Possesion Bond"
            />
          </div>

          <h3 className="text-2xl text-left font-bold my-4">Flaws</h3>
          <div className="input-container">
            <input
              className="input-field"
              type="text"
              placeholder="What Enrages you?"
              aria-label="Enrage Flaw"
            />
          </div>
          <div className="input-container">
            <input
              className="input-field"
              type="text"
              placeholder="What’s the one person, concept, thing or event that you are terrified of?"
              aria-label="Terrified Flaw"
            />
          </div>
          <div className="input-container">
            <input
              className="input-field"
              type="text"
              placeholder="What are your vices?"
              aria-label="Vices Flaw"
            />
          </div>
          <h3 className="text-2xl text-left font-bold my-4">Background</h3>
          <div className="input-container">
            <textarea
              rows={5}
              className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
              placeholder={`Where do you came From? Describe the place and origin of your character. 
Provide informations about:
          - Proficiency
          - Languages
          - Initial Equipment`}
            ></textarea>
          </div>
          <div className="input-container">
            <textarea
              rows={5}
              className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
              placeholder={`How made you become an adventurer? Describe what event, or situation drove you to start your quest?`}
            ></textarea>
          </div>
          <button className="generate-button" type="button">
            Generate Character
          </button>
        </form>
      </div>
    </>
  );
}
