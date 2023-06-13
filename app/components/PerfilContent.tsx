export default function PerfilContent({
    children,
  }: {
    children: React.ReactNode
  }){
    return (
        <div className="md:flex md:justify-center md:w-screen md:h-[92vh] md:pt-5 md:items-center">
            {children}
        </div>
    )
}