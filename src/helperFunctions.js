function calculateEMI({principal, annualInterestRate, tenureInYears}) {
    if(!principal || !annualInterestRate || !tenureInYears) return null;


    // Convert annual interest rate to monthly interest rate
    const monthlyInterestRate = Number(annualInterestRate) / 12 / 100;
  
    // Convert tenure in years to months
    const tenureInMonths = Number(tenureInYears) * 12;
  
    // Calculate EMI using the formula
    const emi = (Number(principal) * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureInMonths)) / 
                (Math.pow(1 + monthlyInterestRate,   
   tenureInMonths) - 1);
  console.log(Math.floor(emi))
    return Math.floor(emi);
  }

  export {calculateEMI}