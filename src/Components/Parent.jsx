import React, { useCallback, useState } from 'react'
import Text from './Text';
import But from './But';
import { useMemo } from 'react';

function Parent() {

    const [age, setAge] = useState(0);
    const [name, setName] = useState("ali");
    console.log("first");
    const clac = useMemo((x) => {

        for (let i = 0; i < 200000000; i++) {

        }
        return x + 2;


    }, [name]);

    const increaseAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);
    const increaseName = useCallback(() => {
        setName("negm");
    }, [name])
    return (
        <div>
            <Text text={age} />
            <But title='increase age' click={increaseAge} />
            <Text text={name} />
            <Text text={clac} />
            <But title='increase name' click={increaseName} />
        </div>
    )
}

export default Parent