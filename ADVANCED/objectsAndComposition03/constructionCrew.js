function constructionCrew(workerObject) {
    if (workerObject.dizziness) {
        let required = 0.1 * workerObject.weight * workerObject.experience;
        workerObject.levelOfHydrated += required;
        workerObject.dizziness = false;
    }
    return workerObject;
}

console.log(constructionCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }))