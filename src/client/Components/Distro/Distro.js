import React from 'react';

const myFavOS = `
                  sMN-
                 +MMMm'
                /MMMMMd
               :NMMMMMMy
              -NMMMMMMMMs
             .NMMMMMMMMMM+
            .mMMMMMMMMMMMM+
            oNMMMMMMMMMMMMM+
          '+:-+NMMMMMMMMMMMM+
          .sNMNhNMMMMMMMMMMMM/
        'hho/sNMMMMMMMMMMMMMMM/
       '.'omMMmMMMMMMMMMMMMMMMM+
      .mMNdshMMMMd+::oNMMMMMMMMMo
     .mMMMMMMMMM+     'yMMMMMMMMMs
    .NMMMMMMMMM/        yMMMMMMMMMy
   -NMMMMMMMMMh         'mNMMMMMMMMd'
  /NMMMNds+:.'             '-/oymMMMm.
 +Mmy/.                          ':smN:
/+.                                  -o.
`;

const Distro = () => {
  return (
    <div className="distro-wrapper">
      <div className="distro-content">
        {myFavOS}
      </div>
    </div>
  );
};

export default Distro;
