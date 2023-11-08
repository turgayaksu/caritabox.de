type AvatarProps = {
  fullname: string | null;
};
const Avatar = ({ fullname }: AvatarProps) => {
  if (!fullname) return;

  const name = fullname.split(" ");

  const text = name[0].charAt(0) + name[name.length - 1].charAt(0);

  return (
    <div className="border-caritabox-200/70 bg-caritabox-100/70 text-caritabox-500 dark:border-caritabox-500 dark:bg-caritabox-600 dark:text-caritabox-100 flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold">
      {text}
    </div>
  );
};

export default Avatar;
