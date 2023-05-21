import {
    CodeIcon,
    DatabaseIcon,
    UserIcon,
    CursorClickIcon,
    CloudIcon,
    ShieldCheckIcon,
  } from "@heroicons/react/outline";
  
  export default function Features() {
    const data = [
      {
        title: "Simple Code base",
        description:
          "Alpha low hanging fruit focus burn rate niche market accelerator advisor agile development marketing.",
        icon: <CodeIcon className="w-6 h-6" />,
      },
      {
        title: "Powerful Databases",
        description:
          "Ramen equity strategy ownership. Angel investor holy grail growth hacking ownership traction rockstar startup.",
        icon: <DatabaseIcon className="w-6 h-6" />,
      },
      {
        title: "Easy Login & Access",
        description:
          "Founders holy grail lean startup gamification hypotheses. Series financing disruptive branding.",
        icon: <UserIcon className="w-6 h-6" />,
      },
      {
        title: "Design without Limits",
        description:
          "Early adopters funding innovator series A financing business plan pitch metrics venture branding and company.",
        icon: <CursorClickIcon className="w-6 h-6" />,
      },
      {
        title: "Cloud Powered",
        description:
          "Crowdsource ramen crowdfunding backing. Business model canvas responsive web design non-disclosure.",
        icon: <CloudIcon className="w-6 h-6" />,
      },
      {
        title: "GDPR Compliant",
        description:
          "Virality influencer assets lean startup interaction design beta alpha seed round launch party.",
        icon: <ShieldCheckIcon className="w-6 h-6" />,
      },
    ];
  
    return (
      <>
        <div className="py-5 ">
          <div
            className="container max-w-screen-xl px-4 mx-auto my-10"
            id="features">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {data.map((item, index) => (
                <div className="my-5 grid__item lg:m-5" key={index}>
                  <div className="flex items-center justify-center text-indigo-600 bg-indigo-100 rounded-full w-14 h-14 dark:bg-indigo-900 dark:text-indigo-300">
                    {item.icon}
                  </div>
                  <h3 className="pt-2 my-4 text-xl font-medium text-black dark:text-white text-opacity-90">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-400 text-opacity-70">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }