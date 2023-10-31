import { type FormSchema } from "@/components/LoanSimulatorForm";

const scores = {
  type: {
    citadine: 8,
    cabriolet: 6,
    berline: 6.5,
    suv: 4,
  },
  energy: {
    essence: 5,
    electric: 9,
    gas: 6,
    diesel: 4,
    hybrid: 7,
  },
  mileagePerYear: {
    "5to10k": 9,
    "10to15k": 7,
    "15to20k": 5,
    "20to25k": 3,
    "25to30k": 1,
  },
  years: {
    "1960-1970": 1,
    "1970-1980": 2,
    "1990-2000": 4,
    "2000-2010": 5,
    "2010+": 7,
  },
};
const bonus = {
  passagers: {
    x1: -0.11,
    x2: 0.17,
    x3: 0.29,
    x4: 0.53,
  },
};

/**
 * Calculates the interest rate for a loan based on the input data.
 *
 * @param data - An object containing the following properties:
 *   - type: The type of the vehicle (citadine, cabriolet, berline, suv).
 *   - energy: The energy type of the vehicle (essence, electric, gas, diesel, hybrid).
 *   - mileagePerYear: The average mileage per year of the vehicle (5to10k, 10to15k, 15to20k, 20to25k, 25to30k).
 *   - years: The manufacturing years of the vehicle (1960-1970, 1970-1980, 1990-2000, 2000-2010, 2010+).
 *   - passagers: The number of passengers the vehicle can accommodate (x1, x2, x3, x4).
 * @returns The calculated interest rate for the loan, taking into account the total score and the passenger bonus.
 */
export function calculateRateLoan(data: FormSchema): number {
  const totalScore =
    scores.type[data.type] +
    scores.energy[data.energy] +
    scores.mileagePerYear[data.mileagePerYear] +
    scores.years[data.years];

  const rate = getRateLoan(totalScore);
  const rateWithBonus = rate - bonus.passagers[data.passagers];

  return rateWithBonus;
}

/**
 * Calculates the interest rate for a loan based on a given score.
 *
 * @param score - The score used to determine the interest rate for the loan.
 * @returns The interest rate for the loan based on the given score.
 * @throws {Error} If the score is outside the range of 0 to 40.
 *
 * @example
 * const score = 20;
 * const rate = getRateLoan(score);
 * console.log(rate); // Output: 0.0252
 */
function getRateLoan(score: number): number {
  if (score >= 0 && score <= 10) return 3.0;
  if (score >= 11 && score <= 15) return 2.74;
  if (score >= 16 && score <= 25) return 2.52;
  if (score >= 26 && score <= 33) return 2.1;
  if (score >= 34 && score <= 40) return 1.85;

  throw new Error("Invalid score! Must be between 0 and 40!");
}
