// Function to calculate net salary based on various deductions and exemptions
function calculateNetSalary() {
    // Define PAYE (Pay As You Earn) tax rates based on income ranges
    const PAYE_RATES = [
        [24000, 288000, 10.0],
        [24001, 32333, 25.0],
        [32334, 500000, 30.0],
        [500001, 800000, 32.5],
        [800001, Infinity, 35.0]
    ];

    // Define NHIF (National Hospital Insurance Fund) rates based on income ranges
    const NHIF_RATES = [
        [0, 5999, 150],
        [6000, 7999, 300],
        // ... (other NHIF rate ranges)
        [100000, Infinity, 1700]
    ];

    // Define fixed rates for NSSF (National Social Security Fund), employer, and housing levy
    const NSSF_RATE_EMPLOYEE = 0.06;
    const NSSF_RATE_EMPLOYER = 0.06;
    const HOUSING_LEVY_RATE = 0.015;

    // Get input from the user
    const grossSalary = parseFloat(prompt("Enter Gross Salary:"));
    const disabilityExemption = prompt("Do you have a disability exemption certificate? (Yes/No):").toLowerCase() === 'yes';
    const mortgage = prompt("Do you have a Mortgage? (Yes/No):").toLowerCase() === 'yes';
    const lifeInsurance = prompt("Do you have a life insurance policy? (Yes/No):").toLowerCase() === 'yes';
    const homeOwnershipPlan = prompt("Do you have a Home Ownership Savings Plan? (Yes/No):").toLowerCase() === 'yes';

    // Calculate annual salary
    const annualSalary = grossSalary * 12;

    // Calculate PAYE based on income ranges
    let paye = 0;
    for (const [lower, upper, rate] of PAYE_RATES) {
        if (lower <= annualSalary && annualSalary <= upper) {
            paye = (annualSalary - lower + 1) * (rate / 100);
            break;
        }
    }

    // Apply disability exemption if applicable
    if (disabilityExemption) {
        paye = Math.max(0, paye - 150000);
    }

    // Calculate NHIF deduction based on gross salary ranges
    let nhifDeduction = 0;
    for (const [lower, upper, deduction] of NHIF_RATES) {
        if (lower <= grossSalary && grossSalary <= upper) {
            nhifDeduction = deduction;
            break;
        }
    }

    // Calculate NSSF deductions for both employee and employer
    const nssfDeductionEmployee = Math.min(grossSalary * NSSF_RATE_EMPLOYEE, 1800);
    const nssfDeductionEmployer = grossSalary * NSSF_RATE_EMPLOYER;

    // Calculate fringe benefit tax if applicable (related to mortgage, life insurance, or home ownership plan)
    let fringeBenefitTax = 0;
    const marketInterestRate = 10;
    if (mortgage || lifeInsurance || homeOwnershipPlan) {
        fringeBenefitTax = Math.max(0, (marketInterestRate - 10) * (grossSalary / 100));
    }

    // Calculate housing levy
    const housingLevy = grossSalary * HOUSING_LEVY_RATE;

    // Calculate net salary by deducting all applicable amounts
    const netSalary = grossSalary - paye - nhifDeduction - nssfDeductionEmployee - fringeBenefitTax - housingLevy;

    // Display the results
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`PAYE: ${paye}`);
    console.log(`NHIF Deduction: ${nhifDeduction}`);
    console.log(`NSSF Deduction (Employee): ${nssfDeductionEmployee}`);
    console.log(`NSSF Deduction (Employer): ${nssfDeductionEmployer}`);
    console.log(`Fringe Benefit Tax: ${fringeBenefitTax}`);
    console.log(`Housing Levy: ${housingLevy}`);
    console.log(`Net Salary: ${netSalary}`);
}

// Call the function to calculate and display the net salary
calculateNetSalary();

