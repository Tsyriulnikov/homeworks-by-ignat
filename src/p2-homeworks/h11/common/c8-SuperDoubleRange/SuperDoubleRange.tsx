import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

 type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperDoubleRangePropsType =DefaultInputPropsType & {
    onChangeRange?: (value: number) => void
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    // сделать самому, можно подключать библиотеки

    const [value, setValue] = React.useState<number[]>([20, 37]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <Box sx={{ width: 300 }}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                // getAriaValueText={valuetext}
            />
        </Box>
    );
}

export default SuperDoubleRange
