type requestUserExpansion = {
  id: string;
};

declare namespace Express {
  export interface Request {
    user?: requestUserExpansion;
  }
}
