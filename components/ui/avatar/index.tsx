type AvatarProps = {
  fullname: string | null;
};
const Avatar = ({ fullname }: AvatarProps) => {
  if (!fullname) return;

  const name = fullname.split(" ");

  const text = name[0].charAt(0) + name[name.length - 1].charAt(0);

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-200/70 bg-primary-100/70 font-semibold text-primary-500 dark:border-primary-500 dark:bg-primary-600 dark:text-primary-100">
      {text}
    </div>
  );
};

export default Avatar;
