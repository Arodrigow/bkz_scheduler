import { ButtonProps } from '@/types/types'
import Link from 'next/link';

export default function ButtonComponent(props: ButtonProps) {

    switch (props.type) {
        case 'confirmation':
            return (
                <Link href={props.url ? props.url : ''} className="bg-success hover:bg-successActive text-white text-sm py-2.5 px-5 mr-2 mb-2 rounded-xl transition duration-300">
                    {props.text}
                </Link>
            )
            break;
        case 'danger':
            return (
                <Link href={''} className="bg-danger hover:bg-dangerActive text-white text-sm py-2.5 px-5 mr-2 mb-2 rounded-xl transition duration-300">
                    {props.text}
                </Link>
            )
            break;
        case 'add':
            return (
                <button type='submit' className="w-32 bg-success hover:bg-successActive text-white text-sm py-2.5 px-5 mr-2 mb-2 rounded-xl transition duration-300">
                    {props.text}
                </button>
            )
            break;
        case 'clear':
            return (
                <button type='button' onClick={props.onClickHandler} className="w-32 bg-danger hover:bg-dangerActive text-white text-sm py-2.5 px-5 mr-2 mb-2 rounded-xl transition duration-300">
                    {props.text}
                </button>
            )
            break;
        case 'delete':
            return (
                <button type='button' onClick={props.onClickHandler} className="w-24 bg-danger hover:bg-dangerActive text-white text-sm py-2.5 px-5 mr-2 mb-2 rounded-xl transition duration-300">
                    {props.text}
                </button>
            )
            break;
        case 'choose':
            return (
                <button type='button' onClick={props.onClickHandler} className="w-auto bg-school hover:bg-schoolActive text-white text-sm py-2.5 px-5 mr-2 mb-2 rounded-xl transition duration-300">
                    {props.text}
                </button>
            )
            break;
        default:
            break;
    }
}