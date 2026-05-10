import streamlit as st
import os

st.set_page_config(page_title='RegContest Docs', layout='wide')
st.title('RegContest Platform Documentation')

st.sidebar.title('Navigation')

docs_dir = 'docs'
if os.path.exists(docs_dir):
    md_files = [f for f in os.listdir(docs_dir) if f.endswith('.md')]
    for md_file in sorted(md_files):
        if st.sidebar.button(md_file.replace('.md', '').title()):
            with open(os.path.join(docs_dir, md_file), 'r') as f:
                st.markdown(f.read())
else:
    st.warning('Docs folder not found.')