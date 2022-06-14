import { useRouter } from 'next/router'

export default function Todo () {
    const router = useRouter();
    const {name} = router.query;
    return (
        <div>
            {/* <h1>{name}'s TODO'S</h1>
            <FetchTodo name={name} /> */}
        </div>
    )
}

function FetchTodo (name) {
    if (name === 'jacob') {
        return (
            <ul>
                <li>Registry</li>
                <li>HoneyFund</li>
                <li>Landing page with countdown</li>
            </ul>
        )
    } else {
        return (
            <h1>BO DO</h1>
        )
    }
}