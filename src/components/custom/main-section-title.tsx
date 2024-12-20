import { cn } from "@/lib/utils";

interface MainSectiontitleProps {
  title: string;
  mainContainerClass?: string;
  titleContainerClass?: string;
  borderBottomContainerClass?: string;
}

export const MainSectionTitle: React.FC<MainSectiontitleProps> = (props) => {
  return (
    <div className={cn(["text-center", props.mainContainerClass])}>
      <h1
        className={cn([
          "text-4xl font-bold bg-gradient-to-r from-slate-600 via-gray-700 to-gray-400 bg-clip-text text-transparent pb-3",
          props.titleContainerClass,
        ])}
      >
        {props.title}
      </h1>
      <div
        className={cn([
          "w-24 h-1 border-b-2 border-gray-300 mx-auto mt-2",
          props.borderBottomContainerClass,
        ])}
      ></div>
    </div>
  );
};
