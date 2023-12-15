import { getShoppingCart } from "./fakedb";

const AppliedJobs = async () => {
    const loadedJobs = await fetch('/public/details.json');
    const jobDatas = await loadedJobs.json();
    const storedJob =getShoppingCart;
    const savedJob = [];

    for (const id in storedJob) {
        const addedJob = jobDatas.find(detail => detail.id === id);
        savedJob.push(addedJob);
    }
    return savedJob;
}
export default AppliedJobs;