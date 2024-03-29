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

		if(String(prop).toLowerCase() == "values")
			result = Object.values(result)

		// Search for a single element in an array
		else if(String(prop).startsWith("sarr")){
			let [ ignore, value, ...propertyNames ] = prop.split(":")

			let found = false

			// What if result is not an array
			for(let i = 0; i < result.length; i++){

				let node = result[i]

				for(a of propertyNames){
					node = node[a]
					if(!node) break
				}


				if(String(node).trim() == String(value).trim()){
					result = result[i]
					found = true
					break
				}
			}

			if(!found) result = null
		}
	

		// Filter an array, usually returns an array
		else if(String(prop).startsWith("farr")){
			let [ ignore, value, ...propertyNames ] = prop.split(":")

			let elements = []

			for(let i = 0; i < result.length; i++){
	
				let node = result[i]

				for(a of propertyNames){
					node = node[a]
					if(!node) break
				}

				if(String(node).trim() == String(value).trim())
					elements.push(result[i])

			}

			result = elements
		}

		else if(String(prop).startsWith("pick")){
	
			let [ ignore, ...propertyNames ] = prop.split(":")

			let elements = []

			for(let i = 0; i < result.length; i++){
	
				let node = result[i]

				for(a of propertyNames){
					node = node[a]
					if(!node) break
				}

				elements.push(node)

			}

			result = elements

		}

		else
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
