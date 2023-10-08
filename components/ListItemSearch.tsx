import Image from "next/image";
import Link from "next/link";

interface Props {
    name:string;
    imageUrl:string;
    reposUrl:string;
}

const ListItemSearch = ({name, imageUrl, reposUrl}:Props) => {
    return  <div className="inline-flex w-full space-x-3 py-3">
                <Image className="rounded-full border-2 border-zinc-100" alt={"img"} src={imageUrl} width={60} height={60} />
                <div>
                    <p className="text-lg font-bold"><Link href={`/search/${name}`}>{name}</Link></p>
                    <p className="text-sm hover:text-blue-500 text-zinc-500"><Link href={reposUrl}>Detail</Link></p>
                </div>
            </div>
}

export default ListItemSearch