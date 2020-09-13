const executeInstruction = (instruction, data) => {
	
	const invalid = "-"

	let result = data

	if(!isArray(instruction) || !isObject(data))
		return invalid	

	// Step through each property of the instruction
	// And walk that path in the data
	for(prop of instruction){
	
		// When a property points to undefined break
		if(!result)
			break

		result = result[prop]

	}
	
	// The instruction either ended at a value or not
	// Return the invalid if it doesn't
	return result ? result : invalid

}

module.exports = executeInstruction







// Should use a specialized library to make this checks
function isArray(value){

	if(typeof value != "object")
		return false

	if(!value.hasOwnProperty("length"))
		return false

	return true
}

function isObject(value){

	if(typeof value != "object")
		return false

	return true

}
