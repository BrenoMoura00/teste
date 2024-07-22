import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const FormComponent = () => {
    return (
        <div>
            <FormControl isRequired>
                <FormLabel>First name</FormLabel>
                <Input placeholder='First name' />
            </FormControl>
        </div>
    )
}

export default FormComponent;