export const getJobRelatedDetails = (job): string => {
  const jobDetails = [];
  jobDetails.push(job.type === 2 ? "Hourly" : "Fixed");
  jobDetails.push(job.tierText);
  jobDetails.push(`Posted on: ${job.createdOn?.toString().split("T")[0]}`);
  if (job.hourlyBudget?.min) {
    jobDetails.push(`Min salary: ${job.hourlyBudget?.min} $`);
  }
  if (job.hourlyBudget?.max) {
    jobDetails.push(`Max salary: ${job.hourlyBudget?.max} $`);
  }
  if (job.amount && job.amount.amount) {
    jobDetails.push(`Budget: ${job.amount?.amount} $`);
  }

  return jobDetails.join(" | ");
};
