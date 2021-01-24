#pegando img do node
FROM alpine:3.10
LABEL CRIADOR="ericklucio-suv@hotmail.com"
RUN apk add --no-cache nodejs npm


ENV PORT 3000
#DEF MAIN DIRECTORY
ENV project /usr/src/project
#DEF Backend DIRECTORY
ENV projectBack /usr/src/project/BackEndPaSolucoes
#DEF Front DIRECTORY
ENV projectFront /usr/src/project/FrontEndPaSolucoes


# Create Main directory
RUN mkdir -p ${project}
WORKDIR ${project}

# Copying source files
COPY . ${project}

# Installing dependencies
WORKDIR ${projectBack}
RUN npm install
WORKDIR ${projectFront}
RUN npm install


# Building frontEnd
WORKDIR ${projectFront}
RUN npm run build

# Nao e usado pelo heroku, Only show locally
EXPOSE 3000 

# Running the app
#CMD "npm" "start"
WORKDIR ${project}
CMD sh -c 'cd $(dirname $0) && \
    cd BackEndPaSolucoes && \
    npm start' \
    && \
    'cd - ' \
    && \
    'cd $(dirname $0) && \
    cd FrontEndPaSolucoes && \
    npm start'



