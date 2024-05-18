import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, ...rest }: ImageProps) => (
    <NextImage src={`/alexpasch.al${src}`} {...rest} />
)

export default Image
