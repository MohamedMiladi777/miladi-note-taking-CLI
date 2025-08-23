export const listNotes = notes => {
    notes.forEach(({tags, content, id}) => {
        console.log("id: ", id)
        console.log("content: ", content)
        console.log("tags: ", tags)
        console.log("\n")
        
    });
}