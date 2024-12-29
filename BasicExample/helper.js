
export const connectToDatabase = async () => {
    const dummyPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Connected to database");
            resolve();
        }, 2000);
    }
    );
    await dummyPromise;
}